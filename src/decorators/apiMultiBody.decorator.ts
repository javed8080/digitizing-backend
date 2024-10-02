import { applyDecorators } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

export function ApiMultiBody(...schemas: Array<Function>) {
  const bodyDecorators = schemas.map(schema => ApiBody({ type: schema, required: false }));

  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const decorators = bodyDecorators.map(bodyDecorator => bodyDecorator(target, key, descriptor));

    decorators.forEach(decorator => originalMethod.apply(target, [decorator]));

    return descriptor;
  };
}
