import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "../components/ui/Card"; // Ensure this points to your Card component
const BACKEND_URL = import.meta.env.VITE_API_URL || 3000
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
      
        <div className="flex flex-wrap gap-3 py-4 justify-center items-center">
          {filteredContent.map(({ type, title, link, _id }) => (
            <Card key={_id} title={title} link={link} type={type} _id={_id} canDelete = {false} />
          ))}
        </div>
    </div>
  );
}

