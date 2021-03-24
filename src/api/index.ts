import AnytimeWebhooks from './AnytimeWebhooks';
import Buyers from './Buyers';
import SsoLogins from './SsoLogins';
import Catalogs from './Catalogs';
import Orders from './Orders';
import Payments from './Payments';
import Shipments from './Shipments';
import Suppliers from './Suppliers';
import KitProducts from './KitProducts';
import Products from './Products';
import SupplierFilterConfigs from './SupplierFilterConfigs';
import BuyerLocations from './BuyerLocations';
import Mes from './Mes';
import Reports from './Reports';
import RmAs from './RmAs';
import Avalaras from './Avalaras';
import MePayments from './MePayments';
import MeCreditCardAuthorizations from './MeCreditCardAuthorizations';
import CreditCards from './CreditCards';
import ExchangeRates from './ExchangeRates';
import ValidatedAddresses from './ValidatedAddresses';
import ChiliConfigs from './ChiliConfigs';
import ChiliSpecOptions from './ChiliSpecOptions';
import ChiliSpecs from './ChiliSpecs';
import ChiliTemplates from './ChiliTemplates';
import ChiliDocuments from './ChiliDocuments';
import ChiliFrames from './ChiliFrames';
import ChiliProofs from './ChiliProofs';
import ChiliPdFs from './ChiliPdFs';
import ChiliSpecForms from './ChiliSpecForms';
import ChiliPublishAssets from './ChiliPublishAssets';
import Auth from './Auth';
import Tokens from './Tokens';

export { HeadStartSDK }

const HeadStartSDK: HeadStartSDK = {
    AnytimeWebhooks : new AnytimeWebhooks(),
    Buyers : new Buyers(),
    SsoLogins : new SsoLogins(),
    Catalogs : new Catalogs(),
    Orders : new Orders(),
    Payments : new Payments(),
    Shipments : new Shipments(),
    Suppliers : new Suppliers(),
    KitProducts : new KitProducts(),
    Products : new Products(),
    SupplierFilterConfigs : new SupplierFilterConfigs(),
    BuyerLocations : new BuyerLocations(),
    Mes : new Mes(),
    Reports : new Reports(),
    RmAs : new RmAs(),
    Avalaras : new Avalaras(),
    MePayments : new MePayments(),
    MeCreditCardAuthorizations : new MeCreditCardAuthorizations(),
    CreditCards : new CreditCards(),
    ExchangeRates : new ExchangeRates(),
    ValidatedAddresses : new ValidatedAddresses(),
    ChiliConfigs : new ChiliConfigs(),
    ChiliSpecOptions : new ChiliSpecOptions(),
    ChiliSpecs : new ChiliSpecs(),
    ChiliTemplates : new ChiliTemplates(),
    ChiliDocuments : new ChiliDocuments(),
    ChiliFrames : new ChiliFrames(),
    ChiliProofs : new ChiliProofs(),
    ChiliPdFs : new ChiliPdFs(),
    ChiliSpecForms : new ChiliSpecForms(),
    ChiliPublishAssets : new ChiliPublishAssets(),
    Auth: new Auth(),
    Tokens: new Tokens()
}

interface HeadStartSDK {
    AnytimeWebhooks : AnytimeWebhooks,
    Buyers : Buyers,
    SsoLogins : SsoLogins,
    Catalogs : Catalogs,
    Orders : Orders,
    Payments : Payments,
    Shipments : Shipments,
    Suppliers : Suppliers,
    KitProducts : KitProducts,
    Products : Products,
    SupplierFilterConfigs : SupplierFilterConfigs,
    BuyerLocations : BuyerLocations,
    Mes : Mes,
    Reports : Reports,
    RmAs : RmAs,
    Avalaras : Avalaras,
    MePayments : MePayments,
    MeCreditCardAuthorizations : MeCreditCardAuthorizations,
    CreditCards : CreditCards,
    ExchangeRates : ExchangeRates,
    ValidatedAddresses : ValidatedAddresses,
    ChiliConfigs : ChiliConfigs,
    ChiliSpecOptions : ChiliSpecOptions,
    ChiliSpecs : ChiliSpecs,
    ChiliTemplates : ChiliTemplates,
    ChiliDocuments : ChiliDocuments,
    ChiliFrames : ChiliFrames,
    ChiliProofs : ChiliProofs,
    ChiliPdFs : ChiliPdFs,
    ChiliSpecForms : ChiliSpecForms,
    ChiliPublishAssets : ChiliPublishAssets,
    Auth: Auth,
    Tokens: Tokens
}
