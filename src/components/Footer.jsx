function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-white/45 sm:px-8 lg:px-12">
      <p>© {new Date().getFullYear()} Niket Talekar. All rights reserved.</p>
      <p className="mt-2 text-white/35">Engineering the future with AI.</p>
    </footer>
  );
}

export default Footer;
