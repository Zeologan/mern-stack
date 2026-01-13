import { useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
export default function Courses() {

  const navigate = useNavigate()
  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-6">Courses</h1>
      <div className="grid grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.slug} onClick={()=>navigate(`/courses/${course.slug}`)} className="cursor-pointer bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-grey-500">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
