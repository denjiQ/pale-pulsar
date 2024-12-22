export function MessageItem({ author, content, timestamp }: { author: string; content: string; timestamp: string }) {
    return (
        <div className="flex items-start space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                {author[0]}
            </div>
            <div>
                <div className="flex items-baseline">
                    <span className="font-bold mr-2">{author}</span>
                    <span className="text-xs text-gray-400">{timestamp}</span>
                </div>
                <p>{content}</p>
            </div>
        </div>
    )
}
