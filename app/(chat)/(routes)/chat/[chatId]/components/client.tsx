"use client";

import { Character, Message } from "@prisma/client";
import { useRouter } from "next/navigation";

import { ChatHeader } from "@/components/chat-header";

interface ChatClientProps {
    character: Character & {
        messages: Message[];
        _count: {
            messages: number;
        }
    };
};

export const ChatClient = ({character}: ChatClientProps) => {
    const router = useRouter();

    return (
        <div className="flex flex-col h-full p-4 space-y-2">
            <ChatHeader character={character} />
        </div>
    );
}