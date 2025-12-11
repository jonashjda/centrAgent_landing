# Product Overview: CentrAgent (n8n Custom Chatbot)

## 🚀 Value Proposition
**CentrAgent** is the missing UI layer for n8n. It transforms raw n8n workflows into polished, user-owned AI agents. Users can build complex logic in n8n and instantly deploy it to a professional chat interface without writing a single line of frontend code.

---

## ✨ Key Features

### 1. Unified Chat Interface
*   **Rich Text Support:** The chat supports Markdown rendering, allowing agents to return tables, lists, bold text, and links.
*   **Code Syntax Highlighting:** specialized support for displaying code blocks with syntax highlighting (perfect for coding assistants).
*   **Conversation History:** Automatically saves chat sessions. Users can browse previous conversations and pick up where they left off.
*   **Real-time Feedback:** Visual indicators for when the agent is "thinking" or processing a workflow.

### 2. Agent Management
*   **Bring Your Own Backend:** Users simply paste their n8n Webhook URLs to create an agent.
*   **Dual-Webhook Architecture:**
    *   **Chat Webhook:** Handles the conversation logic.
    *   **Metadata Webhook:** (Optional) Automatically fetches and displays what "tools" or capabilities the agent has.
*   **Customization:** Users can name their agents and provide descriptions to keep their dashboard organized.

### 3. Tool Discovery & Visualization
*   **Dynamic Tool Listing:** The interface queries the agent to see what it can do (e.g., "Send Email," "Query Database," "Search Web").
*   **Visual Icons:** Automatic icon mapping for popular services (AWS, Google, Slack, Jira, etc.) based on tool names.
*   **Manual Refresh:** Users can sync the agent's capabilities if the underlying n8n workflow changes.

### 4. Team Collaboration & Access Control
*   **Team Workspaces:** Users belong to teams (e.g., "Engineering," "Support").
*   **Granular Sharing:** Agents are private by default but can be shared with specific team members via a toggle switch.
*   **Role-Based Access:**
    *   **Owners/Admins:** Can manage team settings and view all agents.
    *   **Members:** Can access agents shared with them.

### 5. Security & Architecture
*   **SSRF Protection:** Built-in validation prevents malicious webhook URLs (blocks localhost/private IP access).
*   **Data Isolation:** Users and teams can only access their own conversation history.
*   **Secure Authentication:** JWT-based login system with password encryption.

---

## 🔄 How It Works (User Flow)

1.  **Build in n8n:** The user creates a workflow in n8n (e.g., a customer support bot).
2.  **Connect:** The user logs into CentrAgent, clicks "New Agent," and pastes the n8n Webhook URL.
3.  **Interact:** The user starts chatting immediately. CentrAgent handles the UI, history, and formatting.
4.  **Share:** The user toggles permissions to let their team members chat with the same agent.

---

## 👥 User Roles

| Role | Capabilities |
| :--- | :--- |
| **Owner** | Full control over the team, billing (future), and all agents. |
| **Admin** | Can manage users and agents within the team. |
| **Member** | Can create their own agents and use agents shared with them. |

---

## 🛠 Technical Specs (For Trust/Security Section)

*   **Frontend:** React + Vite (Fast, responsive, modern UI).
*   **Backend:** Node.js + Express (Robust API handling).
*   **Database:** MongoDB (Scalable storage for chat history).
*   **Integration:** Native HTTP/Webhook support for n8n.

---

## 📚 Built-in Resources
*   **Documentation:** Includes an integrated "Help" section with tutorials.
*   **Templates:** Downloadable JSON templates for n8n workflows to help users get started instantly.