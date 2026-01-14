import { useParams } from "react-router-dom";
import InteractiveDemo from "../components/InteractiveDemo";
import { subtopicConfig } from "../data/subtopicConfig";

export default function SubTopic() {
  const {subtopicSlug} = useParams();
  const config = subtopicConfig[subtopicSlug];

  if(!config){
    return <div className="p-10"> Subtopic not Found</div>
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-2">{config.title}</h1>
      <p className="text-gray-600 max-w-xl">{config.description}</p>
      <InteractiveDemo config={config}/>
    </div>
  );
}
