import {createParamDecorator, ExecutionContext} from '@nestjs/common';

export const jwtConstants = {
  secret: 'f1BtnWgD3VKY',
};

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log(ctx.switchToHttp().getRequest().user);
    return ctx.switchToHttp().getRequest().user;
  },
);
