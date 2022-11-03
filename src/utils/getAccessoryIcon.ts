import SpeedSVG from '../Assets/speed.svg';
import AccelerationSVG from '../Assets/acceleration.svg';
import ForceSVG from '../Assets/force.svg';
import GasolineSVG from '../Assets/gasoline.svg';
import EnergySVG from '../Assets/energy.svg';
import HybridSVG from '../Assets/hybrid.svg';
import ExchangeSVG from '../Assets/exchange.svg';
import PeopleSVG from '../Assets/people.svg';
import CarSVG from '../Assets/car.svg';

export function getAccessoryIcon(type: string){
    switch( type ){
      case 'speed':
        return SpeedSVG;
      case 'acceleration':
        return AccelerationSVG;
      case 'turning_diameter':
        return ForceSVG;
      case 'gasoline_motor':
        return GasolineSVG;
      case 'electric_motor':
        return EnergySVG;
      case 'hybrid_motor':
        return HybridSVG;
      case 'exchange':
        return ExchangeSVG;
      case 'seats':
          return PeopleSVG;
      default:
        return CarSVG;
    };
};