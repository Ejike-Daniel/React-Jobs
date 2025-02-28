import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleJobs, setVisibleJobs] = useState(6);

  const jobsPerLoad = 3;

  const loadMoreJobs = () => {
    setVisibleJobs((prev) => prev + jobsPerLoad);
  };

  useEffect(() => {
    const apiUrl = isHome ? "api/jobs?_limit=3" : "api/jobs";
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(" Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // const JobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.slice(0, visibleJobs).map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
        </>
      </div>
      {visibleJobs < jobs.length && (
        <div className="flex justify-center mt-8 ">
          <button
            onClick={loadMoreJobs}
            className="bg-black px-4 py-2 rounded-lg text-white font-medium  cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default JobListings;
