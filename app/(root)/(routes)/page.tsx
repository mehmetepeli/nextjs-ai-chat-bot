import {SearchInput} from "@/components/search-input";
import {Categories} from "@/components/categories";
import prismadb from "@/lib/prismadb";
import {Characters} from "../../../components/characters";

interface RootPageProps {
    searchParams: {
        categoryId: string;
        name: string;
    }
}

const RootPage = async ({searchParams}: RootPageProps) => {
    const data = await prismadb.character.findMany({
        where: {
            categoryId: searchParams.categoryId,
            name: {
                search: searchParams.name
            }
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            _count: {
                select: {
                    messages: true
                }
            }
        }
    });

    const categories = await prismadb.category.findMany();
    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput/>
            <Categories data={categories}/>
            <Characters data={data}/>
        </div>
    );
};

export default RootPage;
