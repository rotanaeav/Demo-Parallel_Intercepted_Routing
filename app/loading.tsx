export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full flex flex-col items-center">
                <p className="text-lg">Loading...</p>
            </div>
        </div>
    );
}