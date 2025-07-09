import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

interface EmailEntry {
  email: string;
  timestamp: string;
}

interface EmailRequest {
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const dataPath = path.join(process.cwd(), 'data', 'emails.json');
  const dataDir = path.dirname(dataPath);

  // Ensure data directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  switch (method) {
    case "GET":
      {
        try {
          let emails: EmailEntry[] = [];
          
          if (fs.existsSync(dataPath)) {
            const fileContent = fs.readFileSync(dataPath, 'utf-8');
            if (fileContent.trim()) {
              emails = JSON.parse(fileContent);
            }
          }

          res.status(200).json({ emails, count: emails.length });
        } catch (error) {
          console.error("Error reading emails:", error);
          res.status(500).json({ error: "Error reading emails" });
        }
      }
      break;
    case "POST":
      {
        try {
          const { email }: EmailRequest = req.body;

          if (!email || typeof email !== 'string' || !email.includes('@')) {
            return res.status(400).json({ error: "Invalid email address" });
          }

          let emails: EmailEntry[] = [];
          
          // Read existing emails
          if (fs.existsSync(dataPath)) {
            const fileContent = fs.readFileSync(dataPath, 'utf-8');
            if (fileContent.trim()) {
              emails = JSON.parse(fileContent);
            }
          }

          // Check if email already exists
          const emailExists = emails.some(entry => entry.email === email);
          
          if (!emailExists) {
            emails.push({
              email,
              timestamp: new Date().toISOString()
            });

            // Save updated emails
            fs.writeFileSync(dataPath, JSON.stringify(emails, null, 2));
          }

          res.status(200).json({ message: "Email saved successfully" });
        } catch (error) {
          console.error("Error saving email:", error);
          res.status(500).json({ error: "Error saving email" });
        }
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}