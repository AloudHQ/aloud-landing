const FeatureSection = () => {
    const featureItems = [
        { title: "Feature 1", text: "Description of feature 1" },
        { title: "Feature 2", text: "Description of feature 2" },
        // Add more features as needed
    ];

    return (
        <div className="text-center mb-8">
            <h2 className="text-[24px] font-bold mb-4">Reimagine the way you connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featureItems.map((item, index) => (
                    <FeatureCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default FeatureSection; 