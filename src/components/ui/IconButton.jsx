const IconButton = ({ label, onClick, className = '', children, ...rest }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className={`flex size-11 cursor-pointer items-center justify-center rounded-[10px] border border-line2 bg-panel text-fg transition-colors hover:border-fg3 ${className}`}
    {...rest}
  >
    {children}
  </button>
)

export default IconButton
