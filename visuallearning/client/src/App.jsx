import { BrowserRouter, Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseTopics from "./pages/CourseTopics";
import SubTopic from "./pages/SubTopic";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/courses" element={<Courses />}/>
            <Route path="/courses/:courseSlug" element={<CourseTopics />}/>
            <Route path="/courses/:courseSlug/:subtopicSlug" element={<SubTopic />}/>
        </Routes>
    </BrowserRouter>
  )
}
