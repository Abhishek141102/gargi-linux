import React from "react";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { motion } from "motion/react";
import { PageRoute } from "../types";
import { BLOG_POSTS } from "../data/blogData";
import { BlogImage } from "./BlogImage";

interface BlogsProps {
  onNavigate: (page: PageRoute) => void;
  onBlogNavigate: (slug: string) => void;
}

export const Blogs: React.FC<BlogsProps> = ({ onNavigate, onBlogNavigate }) => {
  const handleBlogClick = (slug: string) => onBlogNavigate(slug);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* Hero */}
      <section className="bg-[#2c2028] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-300 text-sm font-medium">
              Insights & Ideas
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight">
              Our Blogs
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
              Explore ideas and practical guidance across the services we provide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-700">
                Latest Insights
              </span>

              <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
                Explore Our Latest Articles
              </h2>
            </div>

            <div className="mt-3 text-sm text-stone-500">
              {BLOG_POSTS.length} Articles
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {BLOG_POSTS.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                onClick={() => handleBlogClick(blog.slug)}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <BlogImage
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-stone-800 shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4" />
                      {blog.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="w-4 h-4" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-xl sm:text-2xl font-bold leading-snug text-stone-900 group-hover:text-brand-700 transition-colors">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#2c2028] px-6 py-10 sm:px-10 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Have a technology project in mind?
            </h2>

            <p className="mt-3 text-stone-300 max-w-2xl mx-auto">
              Browse insights on software, ERP, inventory, web and mobile apps, cloud, security, and AI.
            </p>

            <button
              onClick={() => onNavigate("contact")}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold transition"
            >
              Talk to Our Team
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};





