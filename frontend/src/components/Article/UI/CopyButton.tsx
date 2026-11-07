interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Unable to copy text:", error);
    }
  };

  return (
    <button
      type="button"
      className="article-copy-button"
      onClick={handleCopy}
      aria-label="Copy code"
      title="Copy code"
    >
      Copy
    </button>
  );
};

export default CopyButton;
