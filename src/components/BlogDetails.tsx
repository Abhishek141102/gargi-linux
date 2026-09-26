import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";
import { motion } from "motion/react";
import { PageRoute } from "../types";
import { BLOG_POSTS } from "../data/blogData";

interface BlogDetailProps {
  slug: string;
  onNavigate: (page: PageRoute) => void;
  onBlogNavigate: (slug: string) => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ slug, onNavigate, onBlogNavigate }) => {
  const blog = BLOG_POSTS.find((item) => item.slug === slug);
  if (!blog) return (
    <div className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900">Article not found</h1>
        <p className="mt-3 text-slate-600">This article may have moved or the link may be incorrect.</p>
        <button onClick={() => onNavigate("blogs")} className="mt-6 rounded-md bg-lime-400 px-5 py-3 font-semibold text-slate-950">Back to blogs</button>
      </div>
    </div>
  );
  const relatedBlogs = BLOG_POSTS.filter((item) => item.id !== blog.id).slice(0, 3);
  const handleRelatedBlog = (nextSlug: string) => onBlogNavigate(nextSlug);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero / Cover */}
      <section className="relative bg-[#292a2d] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#292a2d]/70 via-[#292a2d]/80 to-[#292a2d]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          {/* Back Button */}
          <div className="text-left">
          <button
            onClick={() => onNavigate("blogs")}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </button>
          </div>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-10 max-w-4xl text-center"
          >
            <span className="inline-flex px-3 py-1.5 rounded-full bg-lime-400 text-slate-950 text-xs sm:text-sm font-semibold">
              {blog.category}
            </span>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-4xl font-bold leading-tight max-w-4xl mx-auto">
              {blog.title}
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {blog.excerpt}
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {blog.date}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock3 className="w-4 h-4" />
                {blog.readTime}
              </span>

              <span className="inline-flex items-center gap-2">
                <UserRound className="w-4 h-4" />
                {blog.author}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-16">
          {/* Main Article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden mb-10">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full aspect-[16/8] object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-7">
              {blog.content.map((paragraph, index) => (
                <React.Fragment key={index}>
                  {index === 0 && (
                    <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-medium">
                      {paragraph}
                    </p>
                  )}

                  {index !== 0 && (
                    <p className="text-base sm:text-lg text-slate-600 leading-8">
                      {paragraph}
                    </p>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <button
                onClick={() => onNavigate("blogs")}
                className="inline-flex items-center gap-2 text-lime-700 hover:text-lime-800 font-semibold"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all blogs
              </button>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="text-lg font-bold">
                About This Article
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                This article is part of the Gargi Linux Access insights
                series covering Linux systems, server administration and infrastructure.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Category
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {blog.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Published
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {blog.date}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Reading Time
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {blog.readTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-6 rounded-2xl bg-[#292a2d] p-6 text-white">
              <h3 className="text-lg font-bold">
                Need Linux support?
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Let's discuss your Linux infrastructure and support
                needs.
              </p>

              <button
                onClick={() => onNavigate("contact")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 hover:text-lime-200"
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="bg-slate-50 border-t border-slate-200 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-lime-700">
                Keep Reading
              </span>

              <h2 className="mt-2 text-3xl font-bold">
                Related Articles
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((item) => (
                <motion.article
                  key={item.id}
                  whileHover={{ y: -4 }}
                  onClick={() => handleRelatedBlog(item.slug)}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-semibold text-lime-700">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-lime-700 transition-colors">
                      {item.title}
                    </h3>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lime-700">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};