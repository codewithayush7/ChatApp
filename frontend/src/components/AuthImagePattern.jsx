const AuthImagePattern=({ title, subtitle }) => {
    return (
        <div className="flex items-center justify-center bg-base-200 p-2 pt-20">
            <div className="max-w-md text-center">
                <div className="grid grid-cols-3 gap-2 w-80 mx-auto mb-6">
                    {[...Array(9)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-18 h-18 aspect-square rounded-2xl bg-primary ${i%2===0? "animate-pulse":""
                                }`}
                        />
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-base-content/60">{subtitle}</p>
            </div>
        </div>
    );
};

export default AuthImagePattern;