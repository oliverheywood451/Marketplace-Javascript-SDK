import OrchestrationProducts from './OrchestrationProducts';
import OrchestrationUsers from './OrchestrationUsers';
import OrchestrationLogs from './OrchestrationLogs';
import Buyers from './Buyers';
import Catalogs from './Catalogs';
import Orders from './Orders';
import Shipments from './Shipments';
import Suppliers from './Suppliers';
import Products from './Products';
import SupplierCategoryConfigs from './SupplierCategoryConfigs';
import BuyerLocations from './BuyerLocations';
import Mes from './Mes';
import Avalaras from './Avalaras';
import MePayments from './MePayments';
import MeCreditCardAuthorizations from './MeCreditCardAuthorizations';
import CreditCardAuthorizations from './CreditCardAuthorizations';
import ExchangeRates from './ExchangeRates';
import ValidatedAddresses from './ValidatedAddresses';
import Assets from './Assets';
import BuyerContents from './BuyerContents';
import CatalogContents from './CatalogContents';
import CategoryContents from './CategoryContents';
import FacetContents from './FacetContents';
import ProductContents from './ProductContents';
import PromotionContents from './PromotionContents';
import SupplierContents from './SupplierContents';
import DocumentSchemas from './DocumentSchemas';
import Documents from './Documents';
import Auth from './Auth';
import Tokens from './Tokens';
import Upload from './Upload';

export { MarketplaceSDK }

const MarketplaceSDK: MarketplaceSDK = {
    OrchestrationProducts : new OrchestrationProducts(),
    OrchestrationUsers : new OrchestrationUsers(),
    OrchestrationLogs : new OrchestrationLogs(),
    Buyers : new Buyers(),
    Catalogs : new Catalogs(),
    Orders : new Orders(),
    Shipments : new Shipments(),
    Suppliers : new Suppliers(),
    Products : new Products(),
    SupplierCategoryConfigs : new SupplierCategoryConfigs(),
    BuyerLocations : new BuyerLocations(),
    Mes : new Mes(),
    Avalaras : new Avalaras(),
    MePayments : new MePayments(),
    MeCreditCardAuthorizations : new MeCreditCardAuthorizations(),
    CreditCardAuthorizations : new CreditCardAuthorizations(),
    ExchangeRates : new ExchangeRates(),
    ValidatedAddresses : new ValidatedAddresses(),
    Assets : new Assets(),
    BuyerContents : new BuyerContents(),
    CatalogContents : new CatalogContents(),
    CategoryContents : new CategoryContents(),
    FacetContents : new FacetContents(),
    ProductContents : new ProductContents(),
    PromotionContents : new PromotionContents(),
    SupplierContents : new SupplierContents(),
    DocumentSchemas : new DocumentSchemas(),
    Documents : new Documents(),
    Auth: new Auth(),
    Tokens: new Tokens(),
    Upload: new Upload()
}

interface MarketplaceSDK {
    OrchestrationProducts : OrchestrationProducts,
    OrchestrationUsers : OrchestrationUsers,
    OrchestrationLogs : OrchestrationLogs,
    Buyers : Buyers,
    Catalogs : Catalogs,
    Orders : Orders,
    Shipments : Shipments,
    Suppliers : Suppliers,
    Products : Products,
    SupplierCategoryConfigs : SupplierCategoryConfigs,
    BuyerLocations : BuyerLocations,
    Mes : Mes,
    Avalaras : Avalaras,
    MePayments : MePayments,
    MeCreditCardAuthorizations : MeCreditCardAuthorizations,
    CreditCardAuthorizations : CreditCardAuthorizations,
    ExchangeRates : ExchangeRates,
    ValidatedAddresses : ValidatedAddresses,
    Assets : Assets,
    BuyerContents : BuyerContents,
    CatalogContents : CatalogContents,
    CategoryContents : CategoryContents,
    FacetContents : FacetContents,
    ProductContents : ProductContents,
    PromotionContents : PromotionContents,
    SupplierContents : SupplierContents,
    DocumentSchemas : DocumentSchemas,
    Documents : Documents,
    Auth: Auth,
    Tokens: Tokens,
    Upload: Upload
}
