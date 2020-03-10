import OrchestrationProducts from './OrchestrationProducts';
import OrchestrationUsers from './OrchestrationUsers';
import OrchestrationLogs from './OrchestrationLogs';
import Buyers from './Buyers';
import Suppliers from './Suppliers';
import Products from './Products';
import Files from './Files';
import SupplierCategoryConfigs from './SupplierCategoryConfigs';
import TaxCodes from './TaxCodes';
import MePayments from './MePayments';
import MeCreditCardAuthorizations from './MeCreditCardAuthorizations';
import CreditCardAuthorizations from './CreditCardAuthorizations';
import Auth from './Auth';
import Tokens from './Tokens';

export { MarketplaceSDK }

const MarketplaceSDK: MarketplaceSDK = {
    OrchestrationProducts : new OrchestrationProducts(),
    OrchestrationUsers : new OrchestrationUsers(),
    OrchestrationLogs : new OrchestrationLogs(),
    Buyers : new Buyers(),
    Suppliers : new Suppliers(),
    Products : new Products(),
    Files : new Files(),
    SupplierCategoryConfigs : new SupplierCategoryConfigs(),
    TaxCodes : new TaxCodes(),
    MePayments : new MePayments(),
    MeCreditCardAuthorizations : new MeCreditCardAuthorizations(),
    CreditCardAuthorizations : new CreditCardAuthorizations(),
    Auth: new Auth(),
    Tokens: new Tokens()
}

interface MarketplaceSDK {
    OrchestrationProducts : OrchestrationProducts,
    OrchestrationUsers : OrchestrationUsers,
    OrchestrationLogs : OrchestrationLogs,
    Buyers : Buyers,
    Suppliers : Suppliers,
    Products : Products,
    Files : Files,
    SupplierCategoryConfigs : SupplierCategoryConfigs,
    TaxCodes : TaxCodes,
    MePayments : MePayments,
    MeCreditCardAuthorizations : MeCreditCardAuthorizations,
    CreditCardAuthorizations : CreditCardAuthorizations,
    Auth: Auth,
    Tokens: Tokens
}
