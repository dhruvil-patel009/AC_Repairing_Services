// import { useRouter } from "next/navigation";

// export default  function JobCard({ title, client, time, address, schedule, tag }: any) {
//         const router = useRouter();

//   return (
//     <div className="col-12 col-xl-6">
//       <div className="card border-0 shadow-sm h-100">
//         <div className="card-body d-flex flex-column flex-md-row gap-3">
//           <div className="flex-grow-1">
//             <div className="d-flex justify-content-between">
//                 <span className="badge bg-primary-subtle text-primary mb-2">{tag}</span>
//                 <small className="text-muted d-flex align-middle"><span className="material-symbols-outlined text-text-secondary text-[16px]">schedule</span>{time}</small>
//             </div>
//             <h5 className="fw-bold">{title}</h5>
//             <p className="mb-2 small"><i className="bi bi-person me-2"></i>{client}</p>
//             <p className="mb-2 small text-muted d-flex align-middle"><span className="material-symbols-outlined text-text-secondary text-[18px]">location_on</span>{address}</p>
//             <p className="mb-3 small text-muted d-flex align-middle"><span className="material-symbols-outlined text-text-secondary text-[18px]">calendar_clock</span>
// {schedule}</p>
// <div className="d-flex align-items-center gap-4">
//             <button className="btn btn-primary w-75 fw-bold"               onClick={() => router.replace("./job/[id]")}>View Details</button>
//             <div className="more-btn">
//                         <span className="material-symbols-outlined text-text-secondary text-[18px]">more_vert</span>
//             </div>
// </div>

//           </div>
//           <div className="bg-light rounded d-none d-sm-block" style={{ width: '200px', height: '200px', objectFit: 'cover' }}>
//             <div className="h-100 d-flex align-items-center justify-content-center text-muted">Image</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"; // Required for useRouter
import { useRouter } from "next/navigation";

// Added 'id' to props to allow dynamic navigation
export default function JobCard({ id = "MC-8821", title, client, time, address, schedule, tag }: any) {
  const router = useRouter();

  return (
    <div className="col-12 col-xl-6">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body d-flex flex-column flex-md-row gap-3">
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between">
              <span className="badge bg-primary-subtle text-primary mb-2">{tag}</span>
              <small className="text-muted d-flex align-items-center">
                <span className="material-symbols-outlined text-secondary fs-6 me-1">schedule</span>
                {time}
              </small>
            </div>
            
            <h5 className="fw-bold">{title}</h5>
            <p className="mb-2 small"><i className="bi bi-person me-2"></i>{client}</p>
            
            <p className="mb-2 small text-muted d-flex align-items-center">
              <span className="material-symbols-outlined text-secondary fs-5 me-1">location_on</span>
              {address}
            </p>
            
            <p className="mb-3 small text-muted d-flex align-items-center">
              <span className="material-symbols-outlined text-secondary fs-5 me-1">calendar_clock</span>
              {schedule}
            </p>

            <div className="d-flex align-items-center gap-3">
              <button 
                className="btn btn-primary w-75 fw-bold" 
                // Fix: Navigate to the actual job ID route
                onClick={() => router.push(`/technician/job/${id}`)}
              >
                View Details
              </button>
              <div className="more-btn cursor-pointer">
                <span className="material-symbols-outlined text-secondary">more_vert</span>
              </div>
            </div>
          </div>

          <div className="bg-light rounded d-none d-sm-flex align-items-center justify-content-center text-muted" 
               style={{ width: '180px', height: '180px', flexShrink: 0 }}>
            <span>Image</span>
          </div>
        </div>
      </div>
    </div>
  );
}