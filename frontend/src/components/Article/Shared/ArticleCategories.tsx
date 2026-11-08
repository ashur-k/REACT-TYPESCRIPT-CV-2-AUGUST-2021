import "./ArticleCategories.css";

interface ArticleCategoriesProps {
  categories: string[];
  className?: string;
}

const ArticleCategories = ({ categories, className = "" }: ArticleCategoriesProps) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className={`article-categories ${className}`} aria-label="Categories">
      {categories.map((category) => (
        <span className="article-category" key={category}>
          {category.replace(/-/g, " ")}
        </span>
      ))}
    </div>
  );
};

export default ArticleCategories;
