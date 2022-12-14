function Homepage() {
  return (
    <>
      <div className="w-screen h-screen bg-brand-secondary
                      justify-center items-center flex overflow-hidden">
        <span className="bg-clip-text text-transparent
                         bg-gradient-to-r from-brand-primary to-brand-alt
                         text-[3rem] font-bold font-['Playfair_Display'] italic
                         hover:bg-gradient-to-l">
          <a href="/colourPalette">Colour Pallete</a>
        </span>
      </div>
    </>
  );
}

export default Homepage;
