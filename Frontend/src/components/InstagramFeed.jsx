import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [albumIndexes, setAlbumIndexes] = useState({}); // track carousel index per album
    const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(backend);
        const data = await res.json();
        console.log("Instagram feed:", data);

        // Initialize albumIndexes with 0 for each carousel
        const initIndexes = {};
        (data.data || []).forEach((post) => {
          if (post.media_type === "CAROUSEL_ALBUM" && post.children?.data) {
            initIndexes[post.id] = 0;
          }
        });

        setAlbumIndexes(initIndexes);
        setPosts(data.data || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [backend]);

  if (loading) return <p>Loading...</p>;
  if (!loading && posts.length === 0)
    return <p className="text-center">No Instagram posts found.</p>;

  // Handle next/prev navigation for carousel
  const handleNext = (postId, total) => {
    setAlbumIndexes((prev) => ({
      ...prev,
      [postId]: ((prev[postId] ?? 0) + 1) % total,
    }));
  };

  const handlePrev = (postId, total) => {
    setAlbumIndexes((prev) => ({
      ...prev,
      [postId]: ((prev[postId] ?? 0) - 1 + total) % total,
    }));
  };

  return (
    <div className="relative -mt-30">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#2a2c38] to-transparent z-10 pointer-events-none "></div>
      {/* Right fade edge */}
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2a2c38] to-transparent z-10 pointer-events-none"></div>
    <Marquee pauseOnHover={true} speed={50} gradient={false}>
      <div className="relative flex gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-[400px] flex-shrink-0 rounded-xl  p-2 items-center justify-center flex flex-col gap-2 bg-black/20 backdrop-blur-sm"
          >
            {/* Album (carousel) */}
            {post.media_type === "CAROUSEL_ALBUM" && post.children?.data ? (
              <div className="relative ">
                {(() => {
                  const currentIndex = albumIndexes[post.id] ?? 0;
                  const currentItem = post.children.data[currentIndex];

                  return currentItem.media_type === "VIDEO" ? (
                    <video
                      controls
                      className="w-full h-64 rounded-lg object-cover"
                      poster={currentItem.thumbnail_url}
                    >
                      <source src={currentItem.media_url} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={currentItem.media_url}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  );
                })()}

                {/* Prev/Next buttons */}
                <button
                  onClick={() =>
                    handlePrev(post.id, post.children.data.length)
                  }
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    handleNext(post.id, post.children.data.length)
                  }
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded-full"
                >
                  ›
                </button>
              </div>
            ) : post.media_type === "VIDEO" ? (
              <video
                controls
                className="w-full h-64 rounded-lg object-cover"
                poster={post.thumbnail_url}
              >
                <source src={post.media_url} type="video/mp4" />
              </video>
            ) : (
              <img
                src={post.media_url}
                loading="lazy"
                alt={post.caption || "Instagram post"}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}

            {/* Link */}
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm font-semibold mt-2 inline-block text-center place-self-center"
            >
              View on Instagram
            </a>
          </div>
        ))}
      </div>
    </Marquee>
    </div>
  );
}

export default InstagramFeed;
