const Text = ({ children, className, level }) => {
    switch (level) {
      case 1:
        return <h1 className={`text-3xl ${className}`}>{children}</h1>;
      case 2:
        return <h2 className={`text-2xl ${className}`}>{children}</h2>;
      case 3:
        return <h3 className={`text-xl ${className}`}>{children}</h3>;
      case 4:
        return <h4 className={`text-lg ${className}`}>{children}</h4>;
      case 5:
        return <h5 className={`text-base ${className}`}>{children}</h5>;
      case 6:
        return <h6 className={`text-sm ${className}`}>{children}</h6>;

      default:
        return <p className={className}>{children}</p>;
    }
  };


export default Text