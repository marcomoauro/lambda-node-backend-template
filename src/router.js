import Router from '@koa/router';
import {healthcheck} from "./api/healthcheck.js";
import {routeToFunction} from "./middlewares.js";
import {throw422, throw500} from "./controllers/errors.js";
import {getEnvFoo} from "./api/getEnvFoo.js";

const router = new Router();

router.get('/healthcheck', routeToFunction(healthcheck));

router.get('/errors/422', routeToFunction(throw422));
router.get('/errors/500', routeToFunction(throw500));

router.get('/env/foo', routeToFunction(getEnvFoo));

export default router;