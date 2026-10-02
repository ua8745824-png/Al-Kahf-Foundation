import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { coursesData, courseCategories } from '../data/courses';
import CourseCard from './CourseCard';
import { IslamicDivider } from './IslamicPattern';
import { Search, Sparkles, BookOpen } from 'lucide-react';
import { getLocalizedCategoryName, getLocalizedCourse } from '../utils/courseLocalization';

export default function Courses({ limit, showFilters = true, onQuickEnroll, initialCategory = "All Courses" }) {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  const getCategoryCount = (cat) => {
    if (cat === "All Courses") return coursesData.length;
    return coursesData.filter((c) => c.category === cat).length;
  };

  const filteredCourses = coursesData.filter((course) => {
    const loc = getLocalizedCourse(course, i18n.language);
    const matchesCategory =
      selectedCategory === "All Courses" || course.category === selectedCategory;
    
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesSearch =
      (course.title && course.title.toLowerCase().includes(query)) ||
      (loc.title && loc.title.toLowerCase().includes(query)) ||
      (course.arabicTitle && course.arabicTitle.includes(query)) ||
      (loc.shortDescription && loc.shortDescription.toLowerCase().includes(query)) ||
      (loc.category && loc.category.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const displayedCourses = limit ? filteredCourses.slice(0, limit) : filteredCourses;

  return (
    <section className="py-20 bg-sand-50 dark:bg-[#02180d] relative overflow-hidden transition-colors duration-150" id="courses-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-900 dark:text-emerald-200 text-xs font-semibold uppercase tracking-wider border border-emerald-200/40 dark:border-emerald-700/50">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 shrink-0" />
            <span>{t('courses.badge')} ({coursesData.length})</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-serif">
            {t('courses.catalogHeading')}
          </h2>

          <IslamicDivider showArabic={false} />

          <p className="text-sm sm:text-base text-slate-600 dark:text-emerald-100/80 leading-relaxed">
            {t('courses.subheading')}
          </p>
        </div>

        {/* Filters and Search Bar */}
        {showFilters && (
          <div className="mt-10 space-y-5">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              
              {/* Category Filter Pills with Count Badges */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-none">
                {courseCategories.map((category) => {
                  const count = getCategoryCount(category);
                  const isSelected = selectedCategory === category;
                  const localizedCatName = getLocalizedCategoryName(category, i18n.language);

                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'bg-emerald-900 dark:bg-emerald-850 text-gold-300 shadow-md border border-gold-500/40 font-bold scale-[1.02]'
                          : 'bg-white dark:bg-emerald-950/70 text-slate-700 dark:text-emerald-100/90 hover:bg-slate-100 dark:hover:bg-emerald-900/60 border border-slate-200/90 dark:border-emerald-800/60'
                      }`}
                    >
                      <span>{localizedCatName}</span>
                      <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                        isSelected
                          ? 'bg-emerald-850 dark:bg-emerald-900 text-gold-400'
                          : 'bg-slate-100 dark:bg-emerald-900/80 text-slate-500 dark:text-emerald-300/80'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Search Box */}
              <div className="relative w-full lg:w-80">
                <Search className="w-4 h-4 text-slate-400 dark:text-emerald-400/60 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('courses.searchPlaceholder')}
                  className="w-full ps-10 pe-12 py-2.5 text-xs sm:text-sm bg-white dark:bg-emerald-950/80 text-slate-900 dark:text-white border border-slate-200 dark:border-emerald-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/50 dark:focus:ring-gold-500/40 focus:border-emerald-700 dark:focus:border-gold-500/60 shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute end-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:text-emerald-400 dark:hover:text-gold-300 font-medium"
                  >
                    {t('courses.searchClear')}
                  </button>
                )}
              </div>

            </div>

            {/* Results Count Banner */}
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-emerald-300/80 px-1">
              <span>
                {t('courses.showing')} <strong>{displayedCourses.length}</strong> {t('courses.of')} <strong>{coursesData.length}</strong> {t('courses.coursesIn')}{' '}
                <strong className="text-emerald-900 dark:text-gold-300">{getLocalizedCategoryName(selectedCategory, i18n.language)}</strong>
              </span>
              {selectedCategory !== "All Courses" && (
                <button
                  onClick={() => setSelectedCategory("All Courses")}
                  className="text-emerald-800 dark:text-gold-400 font-bold hover:underline"
                >
                  {t('courses.showAll')}
                </button>
              )}
            </div>

          </div>
        )}

        {/* Courses Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onQuickEnroll={onQuickEnroll}
              />
            ))
          ) : (
            <div className="col-span-full py-16 text-center bg-white dark:bg-emerald-950/70 rounded-3xl border border-slate-200 dark:border-emerald-850/60 p-8 space-y-4 shadow-soft-card">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 dark:bg-gold-500/20 text-gold-700 dark:text-gold-300 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="text-slate-700 dark:text-white font-bold text-base">
                {t('courses.noFound')} &ldquo;{searchQuery}&rdquo;
              </p>
              <p className="text-xs text-slate-500 dark:text-emerald-200/70 max-w-sm mx-auto">
                {t('courses.noFoundSub')}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Courses");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-850 text-white text-xs font-bold shadow transition-all border border-gold-500/30"
              >
                {t('courses.resetFilters')}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
