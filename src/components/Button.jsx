export const Button = ({ content, onClick }) => (
  <button onClick={() => onClick(content)}>{content}</button>
);
