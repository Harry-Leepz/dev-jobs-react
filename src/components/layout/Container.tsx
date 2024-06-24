import JobItemContent from "../joblist/JobItemContent";
import Sidebar from "../shared/Sidebar";

export default function Container() {
  return (
    <div className='container'>
      <Sidebar />
      <JobItemContent />
    </div>
  );
}
