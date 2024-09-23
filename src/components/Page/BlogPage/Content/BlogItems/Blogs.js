"use client"; // Client-side fetching
import config from "@/config";
import { useEffect, useState } from "react";
import { fetchblogsPage } from "@/utils/blogs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1); // Default page is 1
  const pageSize = 6; // Number of blogs per page
  const [loading,setLoading]=useState(false)
  const router = useRouter();
  const [error, setError] = useState(null);

  // Fetch blogs based on the current page
  const fetchData = async (currentPage) => {
    setLoading(true);
    setError(null); // Reset error state before fetching
    try {
      const fetchedData = await fetchblogsPage(currentPage, pageSize);
      setBlogsData(fetchedData.blogs || []);
      setPagination(fetchedData.pagination || {});
      router.push(
        `/blogs?page=${currentPage}&pageSize=${pageSize}`,
        undefined,
        { shallow: true }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on page change
  useEffect(() => {
    fetchData(page); // Ensure fetch is done whenever `page` changes
  }, [page]); // Dependency array includes `page`

  const handleNextPage = () => {
    if (page < pagination.pageCount) {
      setPage(page + 1); // Increment page when Next is clicked
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1); // Decrement page when Previous is clicked
    }
  };

  if(loading){
    return <p className="flex justify-center items-center h-full">Loading...</p>
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5 gap-y-10">
        {blogsData &&
          blogsData.map((item, index) => {
            return (
              <div key={index}>
                {/* <Link href={`/blogs/${item?.attributes?.slug}/${item?.id}`}> */}
                {/* <Link href={`/blogs/${item?.id}`}> */}
                  <div className="flex flex-wrap sm:flex-nowrap gap-4">
                    <div
                      className="min-w-[255px] h-[174px] relative bg-no-repeat bg-cover rounded-[18px]"
                      style={{
                        backgroundImage: `url(${config.api}${item?.attributes?.image?.data?.attributes?.url})`,
                      }}
                    >
                      <div className="max-h-fit flex justify-end">
                        <p className="bg-[#100600d5] font-medium text-[#FF6E00] text-[12px] px-[6px] py-[3px] m-2 rounded-[8px]">
                          {item?.attributes?.category}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-[20px] text-[#fff] dallas_services_title">
                        {item?.attributes?.title}
                      </p>
                      <p className="text-[#9c9a99] dallas_services_description text-[16px] mt-[4px]">
                        {item?.attributes?.description}
                      </p>
                      <p className="text-[#FF7003] mt-[14px]">Read More</p>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-4 py-2 mx-2 ${
            page === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Previous
        </button>

        <span className="px-4 py-2">
          Page {page} of {pagination.pageCount || 1}
        </span>

        <button
          onClick={handleNextPage}
          disabled={page === pagination.pageCount}
          className={`px-4 py-2 mx-2 ${
            page === pagination.pageCount
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
