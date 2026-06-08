import StudentCard from "./StudentCard"
function app(){
    return
    <div>
        <h1>
            Student Details
        </h1>
        <StudentCard
        name="Indu"
        course="React"
        />
        <StudentCard
        name="Diya"
        course="Python"
        />
    </div>
}
export default app