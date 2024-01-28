type TPricing = {
    category: string;
    price: string;
    extra_feature: string[];
}

export type TService = {
    _id: string,
    service_name: string;
    description: string;
    pricing: TPricing[];
    feature_facilities: string[];
    image: string;
}