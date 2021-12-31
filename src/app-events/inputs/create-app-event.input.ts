import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAppEventInput {
  @Field(() => String)
  event: string;
  @Field(() => Date, { nullable: true })
  date?: Date;
}
