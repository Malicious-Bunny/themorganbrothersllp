const Logo = () => (
  <div className="flex items-center">
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-primary-900 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-neutral-warm-900 tracking-tight leading-none">
          Morgan Dauterive
        </span>
        <span className="text-sm font-medium text-primary-700 tracking-wider uppercase leading-none">
          LLP
        </span>
      </div>
    </div>
  </div>
);

export default Logo;
