export const Button = ({ content, click }) => (
  <button onClick={() => click(content)}>{content}</button>
);
