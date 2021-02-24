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
import TecraDocuments from './TecraDocuments';
import TecraSpecs from './TecraSpecs';
import TecraFrames from './TecraFrames';
import TecraProofs from './TecraProofs';
import TecraPdFs from './TecraPdFs';
import TecraSpecForms from './TecraSpecForms';
import Auth from './Auth';
import Tokens from './Tokens';
import Upload from './Upload';

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
    TecraDocuments : new TecraDocuments(),
    TecraSpecs : new TecraSpecs(),
    TecraFrames : new TecraFrames(),
    TecraProofs : new TecraProofs(),
    TecraPdFs : new TecraPdFs(),
    TecraSpecForms : new TecraSpecForms(),
    Auth: new Auth(),
    Tokens: new Tokens(),
    Upload: new Upload()
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
    TecraDocuments : TecraDocuments,
    TecraSpecs : TecraSpecs,
    TecraFrames : TecraFrames,
    TecraProofs : TecraProofs,
    TecraPdFs : TecraPdFs,
    TecraSpecForms : TecraSpecForms,
    Auth: Auth,
    Tokens: Tokens,
    Upload: Upload
}
