export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-8">
      <div className="container text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Zed Interiors. All rights reserved.</p>
      </div>
    </footer>
  );
}
