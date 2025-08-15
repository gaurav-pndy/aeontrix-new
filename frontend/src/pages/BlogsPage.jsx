import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaChartLine,
  FaHeadset,
  FaBullhorn,
  FaUsersCog,
  FaCogs,
} from "react-icons/fa";
import { TbAutomation } from "react-icons/tb";
import SEO from "../components/SEO";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // or any other highlight.js theme
import "./markdown.css";

const categoryIcons = {
  Marketing: <FaBullhorn size={20} />,
  Sales: <FaChartLine size={20} />,
  "Customer Support": <FaHeadset size={20} />,
  "Project Management": <FaRobot size={20} />,
  "AI Secretary": <FaUsersCog size={20} />,
  Others: <FaCogs size={20} />,
};

const categories = Object.keys(categoryIcons);
const blogsPerPage = 6;

// Utility to strip HTML from content
const stripHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

// Memoized Blog Card
const BlogCard = memo(({ blog }) => {
  return (
    <Link
      to={`/blogs/${blog.slug}`}
      state={{ id: blog.id }}
      className="rounded-2xl overflow-hidden shadow-lg content-box border-glow-wrapper highlighted-box-small relative"
    >
      <div className="border-glow"></div>
      <img
        loading="lazy"
        src={blog.image_url}
        alt={blog.title}
        className="h-54 w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-fit">
        <div>
          <div className="flex items-center justify-between text-sm opacity-70 mb-2">
            <span className="px-2.5 text-[0.8rem] py-1 rounded-full bg-[#00FF93]/10 text-[#00FF93] font-medium">
              {blog.category}
            </span>
            <span>{blog.date}</span>
          </div>
          <h3 className="text-xl font-semibold leading-snug mb-2">
            {blog.title}
          </h3>
        </div>
        <div className="mt-2">
          <span className="text-[#00FF93] font-semibold inline-flex items-center hover:text-[#00ff40] transition-all duration-200">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
});

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const normalizeCategory = (str) =>
    str?.replace(/\s+/g, " ").trim().toLowerCase();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/blogs`);
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        console.log(
          "Blog Categories:",
          data.blogs.map((b) => b.category)
        ); // 👈 Add this
        setBlogs(data.blogs || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://aeontrix.com/blogs");
  }, []);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter(
          (b) =>
            normalizeCategory(b.category) ===
            normalizeCategory(selectedCategory)
        );

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortBy === "Latest" ? dateB - dateA : dateA - dateB;
  });

  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);
  const paginatedBlogs = sortedBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat === selectedCategory ? "All" : cat);
    setCurrentPage(1);
  };

  if (loading)
    return <div className="text-white text-center py-20">Loading blogs...</div>;
  if (error)
    return <div className="text-red-500 text-center py-20">Error: {error}</div>;

  return (
    <>
      <SEO
        title="Blogs | Aeontrix"
        description="Explore AI automation, sales, and marketing insights."
        keywords="AI blog, AI automation, business automation, AI tools, Aeontrix blog"
        url="https://aeontrix.com/blogs"
        canonical="https://aeontrix.com/blogs"
        ogTitle="AI Blog | Aeontrix"
        ogDescription="Discover AI automation insights on Aeontrix's blog."
        image="https://aeontrix.com/aeontrix-emblem.png"
        twitterSite="@aeontrix"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "AI Blog | Aeontrix",
          url: "https://aeontrix.com/blogs",
          description:
            "Explore Aeontrix's blog for insights on AI automation, sales, marketing, and customer support.",
          publisher: {
            "@type": "Organization",
            name: "Aeontrix",
            logo: {
              "@type": "ImageObject",
              url: "https://aeontrix.com/aeontrix-emblem.png",
            },
          },
        }}
      />
      <main>
        <div className="px-4 relative z-10 pb-12 max-w-7xl mx-auto text-white">
          <div className="text-center">
            <h2 className="gradient-title font-bold !mb-4">Blogs</h2>
          </div>

          <h2 className="text-2xl font-bold text-seasalt mb-2">
            Browse by Category
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`py-4 flex flex-col items-center justify-center text-center cursor-pointer rounded-xl border text-white/80 transition-all duration-300 
                  ${
                    selectedCategory === cat
                      ? "bg-[#03624C]  border-[#03624C]"
                      : "bg-[#042222]/50  border border-[#1c1c1c] hover:border-[#00FF93]/40"
                  }`}
              >
                <div className="text-[#00FF93] mb-2 flex items-center justify-center bg-[#111111] p-2 rounded-lg">
                  {categoryIcons[cat] || <FaCogs size={20} />}
                </div>
                <span className="text-xs md:text-sm font-medium leading-tight">
                  {cat}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-seasalt">Latest Articles</h3>
            <div>
              <span className="text-[#F8F9FB]/80 mr-3 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#111111] border border-[#00FF93]/30 w-32 px-2 py-1.5 rounded-lg text-sm"
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>
          </div>

          {paginatedBlogs.length === 0 ? (
            <div className="text-center text-white/60 py-20 text-lg">
              No blogs available in this category.
            </div>
          ) : (
            <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {paginatedBlogs.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </div>
          )}

          {paginatedBlogs.length > 0 && (
            <div className="mt-10 flex justify-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg cursor-pointer text-sm font-medium transition 
                    ${
                      page === currentPage
                        ? "bg-[#00FF93] text-black"
                        : "bg-[#1c1f21] text-white hover:bg-[#00FF93]/10"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default BlogsPage;
