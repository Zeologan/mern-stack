import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cssTopics } from "../data/cssTopics";

export default function CourseTopics() {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  if (courseSlug != "css") {
    return <div className="p-10">Course coming soon</div>
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-6">Courses / Css</h1>

      <div className="space-y-4">
        {cssTopics.map((topic, index) => (
          <div key={topic.slug} className="bg-white rounded-xl shadow-sm">
            {/* Topic Header  */}
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center px-6 py-4 font-medium">
              {topic.title}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {/* Subtopic */}
            {openIndex === index && (
              <div className="px-6 pb-4 space-y-2">
                {topic.subtopics.map(sub => (
                  <div key={sub.slug} onClick={() => navigate(`/courses/css/${sub.slug}`)} className="cursur-pointer bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200">{sub.title}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
