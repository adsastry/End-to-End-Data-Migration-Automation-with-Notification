# End-to-End-Data-Migration-Automation-with-Notification
To migrate the data from one database server to another using n8n.
-  Trigger Node: To start the workflow.
- Execute a SQL query Node: To give a query with the necessary conditions for the data migration to start. This is the Source Node. The credentials used here are for one server.
-  Code in JavaScript Node: All the columns in a particular table will be returned.
-  Insert rows in a table Node: This is the Target Node. Here the data which is present in the Source Node will be inserted into the Target Node. The credentials used here are for the other server. The Code in JavaScript Node will ensure that all the fields/columns will be inserted into the Target Node or the table.
-  Merge Node: To merge all the five Insert to a table node, merge node is used as it will give only one output.
-  Code in JavaScript Node: A message/mail will be sent when the migration is completed. To avoid receiving five mails, Code in JavaScript Node is used. In this node, after the data is inserted, only one message/mail will be sent.
-  Send an Email Node: An email will be sent when the workflow is executed. The mail message will be the completion of the workflow.

<img width="1228" height="545" alt="n8n" src="https://github.com/user-attachments/assets/739530cd-8104-4741-bea1-b1d2f2d896d6" />
