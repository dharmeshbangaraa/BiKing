import { Button, Card, CardContent, Typography } from "@mui/material";

const SimilarBikes: React.FC = () => {

    const similarBikes = [
        {
            id: 1,
            name: "Royal Enfield Himalayan",
            price: "3,00,000",
            category: "Adventure",
            image: "/images/bikes/himalayan.jpg"
        },
        {
            id: 2,
            name: "Kawasaki Ninja 300",
            price: "3,40,000",
            category: "Sport",
            image: "/images/bikes/Ninja300.jpg"
        },
        {
            id: 3,
            name: "KTM RC 390",
            price: "3,40,000",
            category: "Sport",
            image: "/images/bikes/RC390.jpg"
        }
    ]

    return (
        <div className="p-1">
            <div>
                <Typography
                    marginTop={2}
                    fontSize={20}
                    fontWeight={"bold"}
                    data-testid="user-review-summary-heading"
                > Explore Similar Bikes
                </Typography>
            </div>

            <div>
                {/* Bike Listings */}
                <div className="my-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {similarBikes?.map((bike) => (
                            <Card key={bike.id} className="hover:shadow-lg" sx={{ borderRadius: 5, borderWidth: 1, borderColor: "gray" }}>
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    className="w-fit h-[200px] p-3 object-fit rounded m-auto"
                                />
                                <CardContent className="bg-gray-50 p-4">
                                    <h3 className="text-md font-semibold mb-1">{bike.name}</h3>
                                    <p className="text-bold text-black text-sm mb-1">999.9 cc &bull; 30 kmpl &bull; 40 bhp &bull; 220 kg</p>
                                    <p className="text-md font-semibold flex">&#8377; {bike.price} <span className="pl-1">Onwards</span></p>
                                    <Button variant="text" color="primary" fullWidth sx={{ border: 1, marginTop: 2, borderRadius: 2 }} >
                                        check out
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimilarBikes;