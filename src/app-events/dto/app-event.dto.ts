import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AppEventDto {
  @Field(() => String)
  id: string;
  @Field(() => String)
  event: string;
  @Field(() => Date)
  date: Date;
}
