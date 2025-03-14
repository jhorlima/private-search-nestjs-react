export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
      <aside>
        <p>Copyright © {year} - All right reserved by Private Search</p>
      </aside>
    </footer>
  );
};
