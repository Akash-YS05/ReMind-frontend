// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BACKEND_URL } from "../config";

// interface Content {
//     _id: string;
//     title: string;
//     description: string;
//     // Add additional fields if necessary
// }

// export function SharedBrain() {
//     const { shareLink } = useParams<{ shareLink: string }>(); // Extract `shareLink` from URL
//     const [username, setUsername] = useState<string | null>(null);
//     const [content, setContent] = useState<Content[] | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         async function fetchSharedContent() {
//             console.log("Component mounted, useEffect triggered.");
//             if (!shareLink) {
//                 console.error("No shareLink found in URL!");
//                 setError("Invalid share link.");
//                 setLoading(false);
//                 return;
//             }

//             try {
//                 setLoading(true);
//                 console.log(`Fetching content for shareLink: ${shareLink}`);
//                 const response = await axios.get(`${BACKEND_URL}/api/brain/${shareLink}`);
//                 console.log("API Response:", response.data);

//                 const { username, content } = response.data;

//                 setUsername(username);
//                 setContent(content);
//             } catch (err: any) {
//                 console.error("Error during API call:", err);
//                 setError(
//                     err.response?.data?.message || "An error occurred while fetching content."
//                 );
//             } finally {
//                 setLoading(false);
//                 console.log("Fetching process completed.");
//             }
//         }

//         fetchSharedContent();
//     }, [shareLink]);

//     if (loading) {
//         return <div>Loading shared content...</div>;
//     }

//     if (error) {
//         return <div className="text-red-500">Error: {error}</div>;
//     }

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold text-center mb-4">
//                 Shared Content from {username}
//             </h1>
//             {content && content.length > 0 ? (
//                 <div className="grid gap-4">
//                     {content.map((item) => (
//                         <div
//                             key={item._id}
//                             className="p-4 border border-gray-300 rounded-md shadow-md"
//                         >
//                             <h2 className="text-lg font-bold">{item.title}</h2>
//                             <p>{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-center">No content available.</p>
//             )}
//         </div>
//     );
// }



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/ui/Card"; // Ensure this points to your Card component
import { BACKEND_URL } from "../config";
import Sidebar from "../components/ui/Sidebar";
import { WaveBackground } from "./Dashboard";

interface Content {
  _id: string;
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function SharedBrain() {
  const { shareLink } = useParams<{ shareLink: string }>();
  const [username, setUsername] = useState<string | null>(null);
  const [filteredContent, setFilteredContent] = useState<Content[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchSharedContent() {
      if (!shareLink) {
        setError("Invalid share link.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/api/brain/${shareLink}`);
        const { username, content } = response.data;

        setUsername(username);
        setFilteredContent(content);
      } catch (err: any) {
        setError(
          err.response?.data?.message || "An error occurred while fetching content."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchSharedContent();
  }, [shareLink]);

  if (loading) {
    return <div>Loading shared content...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    
    <div className="px-4 md:px-16 lg:px-32 py-4">
        <WaveBackground/>
        {/* <Sidebar setFilteredType={you}/> */}
      <h1 className="text-4xl text-center mb-4 font-agu">
        Shared Content from {username}
      </h1>
      
        <div className="flex flex-wrap gap-3 py-4">
          {filteredContent.map(({ type, title, link, _id }) => (
            <Card key={_id} title={title} link={link} type={type} _id={_id} canDelete = {false} />
          ))}
        </div>
    </div>
  );
}

