import OrchestrationProducts from './OrchestrationProducts';
import OrchestrationUsers from './OrchestrationUsers';
import OrchestrationLogs from './OrchestrationLogs';
import Buyers from './Buyers';
import Catalogs from './Catalogs';
import Orders from './Orders';
import Shipments from './Shipments';
import Suppliers from './Suppliers';
import KitProducts from './KitProducts';
import Products from './Products';
import SupplierFilterConfigs from './SupplierFilterConfigs';
import BuyerLocations from './BuyerLocations';
import Mes from './Mes';
import Avalaras from './Avalaras';
import MePayments from './MePayments';
import MeCreditCardAuthorizations from './MeCreditCardAuthorizations';
import CreditCardAuthorizations from './CreditCardAuthorizations';
import ExchangeRates from './ExchangeRates';
import ValidatedAddresses from './ValidatedAddresses';
import Assets from './Assets';
import Schemas from './Schemas';
import ChiliConfigs from './ChiliConfigs';
import ChiliSpecOptions from './ChiliSpecOptions';
import ChiliSpecs from './ChiliSpecs';
import ChiliTemplates from './ChiliTemplates';
import Documents from './Documents';
import Auth from './Auth';
import Tokens from './Tokens';
import Upload from './Upload';

export { HeadStartSDK }

const HeadStartSDK: HeadStartSDK = {
    OrchestrationProducts : new OrchestrationProducts(),
    OrchestrationUsers : new OrchestrationUsers(),
    OrchestrationLogs : new OrchestrationLogs(),
    Buyers : new Buyers(),
    Catalogs : new Catalogs(),
    Orders : new Orders(),
    Shipments : new Shipments(),
    Suppliers : new Suppliers(),
    KitProducts : new KitProducts(),
    Products : new Products(),
    SupplierFilterConfigs : new SupplierFilterConfigs(),
    BuyerLocations : new BuyerLocations(),
    Mes : new Mes(),
    Avalaras : new Avalaras(),
    MePayments : new MePayments(),
    MeCreditCardAuthorizations : new MeCreditCardAuthorizations(),
    CreditCardAuthorizations : new CreditCardAuthorizations(),
    ExchangeRates : new ExchangeRates(),
    ValidatedAddresses : new ValidatedAddresses(),
    Assets : new Assets(),
    Schemas : new Schemas(),
    ChiliConfigs : new ChiliConfigs(),
    ChiliSpecOptions : new ChiliSpecOptions(),
    ChiliSpecs : new ChiliSpecs(),
    ChiliTemplates : new ChiliTemplates(),
    Documents : new Documents(),
    Auth: new Auth(),
    Tokens: new Tokens(),
    Upload: new Upload()
}

interface HeadStartSDK {
    OrchestrationProducts : OrchestrationProducts,
    OrchestrationUsers : OrchestrationUsers,
    OrchestrationLogs : OrchestrationLogs,
    Buyers : Buyers,
    Catalogs : Catalogs,
    Orders : Orders,
    Shipments : Shipments,
    Suppliers : Suppliers,
    KitProducts : KitProducts,
    Products : Products,
    SupplierFilterConfigs : SupplierFilterConfigs,
    BuyerLocations : BuyerLocations,
    Mes : Mes,
    Avalaras : Avalaras,
    MePayments : MePayments,
    MeCreditCardAuthorizations : MeCreditCardAuthorizations,
    CreditCardAuthorizations : CreditCardAuthorizations,
    ExchangeRates : ExchangeRates,
    ValidatedAddresses : ValidatedAddresses,
    Assets : Assets,
    Schemas : Schemas,
    ChiliConfigs : ChiliConfigs,
    ChiliSpecOptions : ChiliSpecOptions,
    ChiliSpecs : ChiliSpecs,
    ChiliTemplates : ChiliTemplates,
    Documents : Documents,
    Auth: Auth,
    Tokens: Tokens,
    Upload: Upload
}
