import React from 'react';

interface WrapperProps<T> {
    item: T;
    renderItem: (item: T) => React.ReactNode;
    children: string;
}

const Wrapper = <T extends {}>(props: WrapperProps<T>) => {
    return (
        <div>
          {props.renderItem(props.item)}
          {props.children}
        </div>
      );
}


// interface WrapperProps<T> {
//     item: T;
//     renderItem: (item: T) => React.ReactNode;
//   }
  
// PropsWithChildren本身封装了children
// type PropsWithChildren<P> = P & { children?: ReactNode };
//   const Wrapper = <T extends {}>(
//     props: React.PropsWithChildren<WrapperProps<T>>
//   ) => {
//     return (
//       <div>
//         {props.renderItem(props.item)}
//         {props.children}
//       </div>
//     );
//   };