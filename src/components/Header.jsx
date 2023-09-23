const Header = ({ category, title, custonCssTitle }) => {
  return (
    <div className="mb-10 p-4">
      <p className="text-gray-400 ">{category}</p>
      <p
        className={`text-3xl font-extrabold tracking-tighter text-slate-900 ${custonCssTitle}`}
      >
        {title}
      </p>
    </div>
  )
}

export default Header
