import { Tabs, Tab } from "@mui/material";

interface TabsPrompt {
    categories: string[];
    selectedCategory: string | null;
    categoryOnChange: (_event: any, newValue: string) => void;
}

const TabComponent: React.FC<TabsPrompt> = ({ categories, selectedCategory, categoryOnChange }) => {

    return (
        <div>
            {/* Category Tabs */}
            <Tabs
                value={selectedCategory}
                onChange={categoryOnChange}
                indicatorColor="primary"
                textColor="primary"
                className="mt-2"
                sx={{
                    ".MuiButtonBase-root": {
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start", // Ensures tabs are not centered
                        paddingX: 0,
                        marginRight: 2,
                        minWidth: "fit-content",
                    },
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            >
                {categories.map((category) => (
                    <Tab
                        key={category}
                        label={category}
                        value={category}
                        sx={{
                            color: "grey",
                            fontWeight: "bold",
                        }}
                    />
                ))}
            </Tabs>
        </div>
    );
};

export default TabComponent;